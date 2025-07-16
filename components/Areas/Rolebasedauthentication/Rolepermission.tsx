'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface RolePermission {
    id: number;
    roleId: number;
    role?: {
        name?: string;
    };
    module?: {
        name?: string;
    };
    canCreate: boolean;
    canRead: boolean;
    canUpdate: boolean;
    canDelete: boolean;
}

interface AvailableRole {
    id: number;
    name: string;
}

export default function RolesTable() {
    const [roles, setRoles] = useState<RolePermission[]>([]);
    const [availableRoles, setAvailableRoles] = useState<AvailableRole[]>([]);
    const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/get-roles')
            .then((res) => res.json())
            .then((resData) => setRoles(resData.data || []))
            .catch(console.error);
    }, []);

    useEffect(() => {
        fetch('http://localhost:8000/api/get-roles-name')
            .then((res) => res.json())
            .then((data) => setAvailableRoles(data.data || []))
            .catch(console.error);
    }, []);

    const filteredRoles = selectedRoleId
        ? roles.filter((r) => r.roleId === selectedRoleId)
        : roles;

    const handlePermissionChange = async (
        id: number,
        field: keyof RolePermission,
        value: boolean
    ) => {
        setRoles((prev) =>
            prev.map((role) =>
                role.id === id ? { ...role, [field]: value } : role
            )
        );

        try {
            const res = await fetch(`http://localhost:8000/api/update-permission`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ID: id, Field: field, Value: value }),
            });
            const result = await res.json();
            if (result.status !== 200) {
                console.error('Server responded with non-200 status', result);
            }
        } catch (error) {
            console.error('Error updating permission', error);
        }
    };

    const renderSwitch = (row: RolePermission, field: keyof RolePermission) => (
        <Switch
            checked={!!row[field]}
            onCheckedChange={(val) => handlePermissionChange(row.id, field, val)}
        />
    );

    return (
        <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Manage Permissions by Role</h3>

            <Select
                value={selectedRoleId?.toString()}
                onValueChange={(val) => setSelectedRoleId(Number(val))}
            >
                <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="Select a Role" />
                </SelectTrigger>
                <SelectContent>
                    {availableRoles.map((role) => (
                        <SelectItem key={role.id} value={role.id.toString()}>
                            {role.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="overflow-auto">
                <table className="min-w-full table-auto border rounded-md">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr className="text-left">
                            <th className="p-2 border">Role</th>
                            <th className="p-2 border">Module</th>
                            <th className="p-2 border">Create</th>
                            <th className="p-2 border">Read</th>
                            <th className="p-2 border">Update</th>
                            <th className="p-2 border">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRoles.map((row) => (
                            <tr key={row.id} className="even:bg-gray-50 dark:even:bg-gray-900">
                                <td className="p-2 border">{row.role?.name || '-'}</td>
                                <td className="p-2 border">{row.module?.name || '-'}</td>
                                <td className="p-2 border">{renderSwitch(row, 'canCreate')}</td>
                                <td className="p-2 border">{renderSwitch(row, 'canRead')}</td>
                                <td className="p-2 border">{renderSwitch(row, 'canUpdate')}</td>
                                <td className="p-2 border">{renderSwitch(row, 'canDelete')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
