import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Edit, Plus, TrashIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from '@/components/Shared/Navbar';

const StarRating = ({ rating, onClick }) => {
  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className="flex">
      {stars.map((star) => (
        <Star 
          key={star} 
          filled={star <= rating} 
          onClick={() => onClick(star)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <span 
    onClick={onClick} 
    className={`cursor-pointer text-2xl ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
  >
    ★
  </span>
);

const UserDashboard = () => {
  const [ratings, setRatings] = useState({});

  const invoices = [
    {
      "invoice": "INV001",
      "paymentStatus": "Paid",
      "totalAmount": "$250.00",
      "paymentMethod": "Auto Repair Shop"
    },
    {
      "invoice": "INV002",
      "paymentStatus": "Pending",
      "totalAmount": "$150.00",
      "paymentMethod": "Mechanic Shop"
    },
    {
      "invoice": "INV003",
      "paymentStatus": "Unpaid",
      "totalAmount": "$350.00",
      "paymentMethod": "Auto Repair Shop"
    },
    {
      "invoice": "INV004",
      "paymentStatus": "Paid",
      "totalAmount": "$450.00",
      "paymentMethod": "Mechanic Shop"
    },
    {
      "invoice": "INV005",
      "paymentStatus": "Paid",
      "totalAmount": "$550.00",
      "paymentMethod": "Auto Repair Shop"
    },
    {
      "invoice": "INV006",
      "paymentStatus": "Pending",
      "totalAmount": "$200.00",
      "paymentMethod": "Mechanic Shop"
    },
    {
      "invoice": "INV007",
      "paymentStatus": "Unpaid",
      "totalAmount": "$300.00",
      "paymentMethod": "Auto Repair Shop"
    }
  ];

  const handleRatingClick = (invoice, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [invoice]: rating
    }));
  };

  return (
    <main>
      <Navbar/>
      <div className=''>
        <Card className='shadow-sm shadow-primary justify-center'>
          <CardHeader className='w-auto flex flex-row justify-between items-center'>
            <CardTitle>STATUS</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Review</TableHead> {/* New column for reviews */}
                  <TableHead className="flex justify-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell>{invoice.totalAmount}</TableCell>
                    <TableCell>
                      <StarRating 
                        rating={ratings[invoice.invoice] || 0} 
                        onClick={(rating) => handleRatingClick(invoice.invoice, rating)} 
                      />
                    </TableCell>
                    <TableCell>
                      <span className='w-full h-full flex justify-center items-center gap-3'>
                        <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' />
                        <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default UserDashboard;
