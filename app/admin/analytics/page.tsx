import AnalyticManagement from "@/components/Areas/AnalyticManagement/AnalyticManagement";
import { Metadata } from "next";






export const metadata: Metadata = {
  title: "Analytics | Profer",
  description: "Generated by create next app",
};

export default function Analytics(){



    return(<>
      

      <AnalyticManagement></AnalyticManagement>
    
    </>);
}