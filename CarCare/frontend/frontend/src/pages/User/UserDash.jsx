import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from 'lucide-react';
import { FaServicestack, FaRoad } from 'react-icons/fa'; // Import road symbol
import Navbar from '@/components/Shared/Navbar';
import { ChartComponent } from '@/components/Chartdash'; // Ensure this path is correct



const UserDash = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-row gap-4">
          <Card className='w-1/4 border border-primary'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Reports
              </CardTitle>
              <Users className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          
          <Card className='w-1/4 border border-primary'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Logs
              </CardTitle>
              <Users className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9</div>
            </CardContent>
          </Card>
          
          <Card className='w-1/4 border border-primary'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Repairs
              </CardTitle>
              <FaServicestack className="h-6 w-6 text-primary" /> {/* Service symbol */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10</div>
            </CardContent>
          </Card>
          
          <Card className='w-1/4 border border-primary'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                KM LOG
              </CardTitle>
              <FaRoad className="h-6 w-6 text-primary" /> {/* Road symbol */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10,000,00</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="border border-primary p-4 rounded-lg">
          <ChartComponent />
        </div>
     
      </div>
    </main>
  );
};

export default UserDash;
