import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from 'lucide-react';
import { FaServicestack, FaToolbox } from 'react-icons/fa'; // Import service and tool symbols
import Navbar from '@/components/Shared/Navbar';

const AdminDashboard = () => {
  return (
    <main>
      <Navbar/>
    <div className="flex flex-row p-4 gap-4">
      <Card className='w-1/4 border border-primary'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Users
          </CardTitle>
          <Users className="h-6 w-6 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10000</div>
        </CardContent>
      </Card>
      
      <Card className='w-1/4 border border-primary'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Active Users
          </CardTitle>
          <Users className="h-6 w-6 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">9999</div>
        </CardContent>
      </Card>
      
      <Card className='w-1/4 border border-primary'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Repairs
          </CardTitle>
          <FaServicestack className="h-6 w-6 text-primary" /> {/* Updated to service symbol */}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10,000</div>
        </CardContent>
      </Card>
      
      <Card className='w-1/4 border border-primary'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Revenue
          </CardTitle>
          <FaToolbox className="h-6 w-6 text-primary" /> {/* Updated to tool symbol */}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10,000,00</div>
        </CardContent>
      </Card>
    </div>
    </main>
  );
};

export default AdminDashboard;
