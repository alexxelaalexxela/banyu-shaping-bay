import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Ruler, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import boardsData from '@/data/boards.json';

const BoardGrid = () => {
  const [selectedBoard, setSelectedBoard] = useState<any>(null);

  const handleViewBoard = (board: any) => {
    setSelectedBoard(board);
  };

  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Boards
            </h2>
            <div className="w-24 h-1 bg-ocean-medium mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each board is carefully crafted to match specific wave conditions and riding styles. 
              From playful fish to powerful guns, find your perfect ride.
            </p>
          </div>

          {/* Board Pricing */}
          <div className="bg-white rounded-lg p-6 wood-shadow mb-12">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Board Pricing</h3>
            <p className="text-muted-foreground mb-6 text-sm">Indicative pricing by size/volume.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">5’10 – 6’6 (jusqu’à 66L)</CardTitle>
                </CardHeader>
                <CardContent className="text-xl font-bold text-ocean-deep">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(6500000)}
                </CardContent>
              </Card>
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">6’8 – 7’0 (jusqu’à 70L)</CardTitle>
                </CardHeader>
                <CardContent className="text-xl font-bold text-ocean-deep">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(7000000)}
                </CardContent>
              </Card>
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">72–80L</CardTitle>
                </CardHeader>
                <CardContent className="text-xl font-bold text-ocean-deep">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(8000000)}
                </CardContent>
              </Card>
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">82–90L</CardTitle>
                </CardHeader>
                <CardContent className="text-xl font-bold text-ocean-deep">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(10000000)}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Boards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {boardsData.map((board, index) => (
              <Card key={board.id} className="group hover:surf-shadow transition-all duration-300 border-sand-medium overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={board.image}
                    alt={board.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button
                    onClick={() => handleViewBoard(board)}
                    size="sm"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-foreground hover:bg-sand-light"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-ocean-light text-white">
                      {board.type}
                    </Badge>
                    <span className="font-semibold text-ocean-deep">{board.price}</span>
                  </div>
                  <CardTitle className="font-serif text-xl">{board.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {board.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Quick Specs */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Ruler className="w-4 h-4 mr-1" />
                      {board.dimensions.length}
                    </div>
                    <div className="flex items-center">
                      <Waves className="w-4 h-4 mr-1" />
                      {board.dimensions.volume}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {board.features.slice(0, 2).map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-ocean-medium rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleViewBoard(board)}
                    variant="outline"
                    className="w-full group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-lg p-8 wood-shadow">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Ready for Your Custom Board?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? Let our master shapers create 
              a board tailored specifically to your style, waves, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="ocean-gradient text-white">
                <Link to="/custom">
                  Order Custom Board
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Consult with Shaper
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Board Detail Modal */}
      {selectedBoard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedBoard(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedBoard.image}
                alt={selectedBoard.name}
                className="w-full h-64 object-cover"
              />
              <Button
                onClick={() => setSelectedBoard(null)}
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
              >
                ×
              </Button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-2xl font-bold">{selectedBoard.name}</h2>
                <span className="text-2xl font-bold text-ocean-deep">{selectedBoard.price}</span>
              </div>
              
              <p className="text-muted-foreground mb-6">{selectedBoard.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-3">Dimensions</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Length:</span>
                      <span className="font-medium">{selectedBoard.dimensions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Width:</span>
                      <span className="font-medium">{selectedBoard.dimensions.width}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thickness:</span>
                      <span className="font-medium">{selectedBoard.dimensions.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Volume:</span>
                      <span className="font-medium">{selectedBoard.dimensions.volume}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedBoard.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-ocean-medium rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-sand-light rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Wave Conditions:</strong> {selectedBoard.waveConditions}
                  </div>
                  <div>
                    <strong>Surf Level:</strong> {selectedBoard.surfLevel}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <Button 
                  className="flex-1 ocean-gradient text-white"
                  onClick={() => window.open(`https://wa.me/62081236302148?text=Hello%20BANYU,%20I'm%20interested%20in%20the%20${selectedBoard.name}%20board.%20Please%20send%20me%20more%20information.`, '_blank')}
                >
                  Order This Board
                </Button>
                <Button variant="outline" onClick={() => setSelectedBoard(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BoardGrid;