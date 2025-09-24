import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import rentals from '@/data/rentals.json';
import boats from '@/data/boats.json';

const RentalsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Board Rentals</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Daily and weekly rentals for all levels. Message us for availability and delivery options.</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentals.map((item: any) => (
              <Card key={item.id} className="border overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-3">{item.type} • {item.size} • {item.volume}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span><strong>Daily:</strong> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.dailyRate)}</span>
                    <span><strong>Weekly:</strong> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.weeklyRate)}</span>
                  </div>
                  <Button asChild className="mt-4 w-full">
                    <a href={`https://wa.me/62081236302148?text=${encodeURIComponent(`Hello BANYU, I'd like to rent: ${item.name} (${item.size}, ${item.volume}). Please share availability.`)}`}>
                      Book on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-16" id="boat-trips">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Boat Trips</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Surf trips by boat to inside or outside spots. Message us to plan your session.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boats.map((trip: any) => (
                <Card key={trip.id} className="border overflow-hidden">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">{trip.type}</CardTitle>
                    <CardDescription>{trip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold">
                      {trip.price ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(trip.price) : 'Contact us'}
                    </div>
                    <Button asChild className="mt-4 w-full">
                      <a href={`https://wa.me/62081236302148?text=${encodeURIComponent(`Hello BANYU, I'm interested in: ${trip.type}. ${trip.price ? `Price shown: ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(trip.price)}` : 'Please provide pricing.'}`)}`}>
                        Book on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RentalsPage;


