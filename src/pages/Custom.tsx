import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type SurfLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert' | '';
type WaveType = 'small-mellow' | 'medium-fun' | 'large-powerful' | 'all-conditions' | '';
type BoardType = 'shortboard' | 'fish' | 'funboard' | 'longboard' | 'gun' | 'other' | '';
type FinSetup = 'single' | 'twin' | 'thruster' | 'quad' | '2+1' | '5-fin' | '';
type TailShape =
  | 'bat'
  | 'diamond'
  | 'pin'
  | 'round'
  | 'rounded-pin'
  | 'round-squash'
  | 'square-squash'
  | 'swallow'
  | 'thumb'
  | 'wing-pin'
  | 'wing-swallow'
  | 'other'
  | '';
type Construction = 'pu-pe' | 'eps-epoxy' | '';
type FinSystem = 'fcs-ii' | 'futures' | 'other' | '';
type Glassing = 'team-light' | 'standard' | 'strong' | 'other' | '';
type Finishing = 'regular' | 'matte' | 'glossy' | 'other' | '';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  phone: string;
  height: string;
  weight: string;
  surfLevel: SurfLevel;
  homeBreak: string;
  waveType: WaveType;
  boardType: BoardType;
  length: string;
  width: string;
  thickness: string;
  finSetup: FinSetup;
  finSystem: FinSystem;
  tailShape: TailShape;
  construction: Construction;
  glassing: Glassing;
  finishing: Finishing;
  shaperModel: string;
  customShaperModel: string;
  artwork: string;
  artworkDescription: string;
  budget: string;
  pickupShipping: string;
  additionalNotes: string;
}

const Custom = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    phone: '',
    height: '',
    weight: '',
    surfLevel: '',
    homeBreak: '',
    waveType: '',
    boardType: '',
    length: '',
    width: '',
    thickness: '',
    finSetup: '',
    finSystem: '',
    tailShape: '',
    construction: '',
    glassing: '',
    finishing: '',
    shaperModel: '',
    customShaperModel: '',
    artwork: '',
    artworkDescription: '',
    budget: '',
    pickupShipping: '',
    additionalNotes: ''
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const composeWhatsAppMessage = () => {
    const lines = [
      'BANYU Custom Surfboard Request',
      '',
      'Personal Information:',
      `- Name: ${formData.name}`,
      formData.email ? `- Email: ${formData.email}` : undefined,
      formData.whatsapp ? `- WhatsApp: ${formData.whatsapp}` : undefined,
      formData.phone ? `- Phone: ${formData.phone}` : undefined,
      '',
      'Physical Specs:',
      formData.height ? `- Height: ${formData.height}` : undefined,
      formData.weight ? `- Weight: ${formData.weight}` : undefined,
      formData.surfLevel ? `- Surf Level: ${formData.surfLevel}` : undefined,
      '',
      'Surfing Context:',
      formData.homeBreak ? `- Home Break: ${formData.homeBreak}` : undefined,
      formData.waveType ? `- Wave Type: ${formData.waveType}` : undefined,
      '',
      'Board Requirements:',
      formData.shaperModel ? `- Shaper/Model: ${formData.shaperModel}` : undefined,
      formData.customShaperModel ? `- Custom Shaper/Model: ${formData.customShaperModel}` : undefined,
      formData.boardType ? `- Board Type: ${formData.boardType}` : undefined,
      (formData.length || formData.width || formData.thickness)
        ? `- Dimensions: ${formData.length || '?'} x ${formData.width || '?'} x ${formData.thickness || '?'}`
        : undefined,
      formData.finSetup ? `- Fin Setup: ${formData.finSetup}` : undefined,
      formData.finSystem ? `- Fin System: ${formData.finSystem}` : undefined,
      formData.tailShape ? `- Tail Shape: ${formData.tailShape}` : undefined,
      formData.construction ? `- Construction: ${formData.construction}` : undefined,
      formData.glassing ? `- Glassing: ${formData.glassing}` : undefined,
      formData.finishing ? `- Finishing: ${formData.finishing}` : undefined,
      '',
      'Artwork:',
      formData.artwork ? `- Style: ${formData.artwork}` : undefined,
      formData.artworkDescription ? `- Description: ${formData.artworkDescription}` : undefined,
      '',
      formData.budget ? `Budget: ${formData.budget}` : undefined,
      formData.pickupShipping ? `Pickup/Shipping: ${formData.pickupShipping}` : undefined,
      '',
      'Additional Notes:',
      formData.additionalNotes || undefined,
      '',
      'Please provide a detailed quote and timeline.'
    ].filter(Boolean).join('\n');
    return encodeURIComponent(lines);
  };

  const handleSubmitWhatsApp = () => {
    if (!formData.name) return;
    const msg = composeWhatsAppMessage();
    const url = `https://wa.me/6281234567890?text=${msg}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Looking for something special?</h1>
            <p className="text-muted-foreground">
              We're here for you. Browse some of our favorite models, artwork, and fill out our custom surfboard order form below.
            </p>
          </div>

          {/* How it works */}
          <section className="max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-2xl font-semibold mb-4">How it works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Come up with the surfboard of your dreams.</li>
              <li>Fill out and submit the Custom Surfboard order form below.</li>
              <li>We will message you to confirm details and a quote.</li>
              <li>Pay the deposit to start your build.</li>
              <li>We will let you know when your surfboard is ready.</li>
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">Free in-store pickup available. Shipping is available for an additional cost.</p>
          </section>

          {/* SURFBOARD ORDER FORM */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 md:p-8 border">
            <h2 className="font-serif text-2xl font-semibold mb-6">SURFBOARD ORDER FORM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input id="whatsapp" value={formData.whatsapp} onChange={(e) => handleChange('whatsapp', e.target.value)} placeholder="+62 812-3456-7890" className="mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" value={formData.height} onChange={(e) => handleChange('height', e.target.value)} placeholder="e.g. 178 cm / 5′10″" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight</Label>
                    <Input id="weight" value={formData.weight} onChange={(e) => handleChange('weight', e.target.value)} placeholder="e.g. 72 kg / 158 lbs" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label>Surf Level</Label>
                  <Select value={formData.surfLevel} onValueChange={(v) => handleChange('surfLevel', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your surf level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div>
                  <Label>Shaper/Model</Label>
                  <Input value={formData.shaperModel} onChange={(e) => handleChange('shaperModel', e.target.value)} placeholder="Choose Shaper/Model or enter one" className="mt-1" />
                </div>

                

                <div>
                  <Label>Wave Type</Label>
                  <Select value={formData.waveType} onValueChange={(v) => handleChange('waveType', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="What waves will you surf?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small-mellow">Small & mellow (1-3ft)</SelectItem>
                      <SelectItem value="medium-fun">Medium & fun (3-6ft)</SelectItem>
                      <SelectItem value="large-powerful">Large & powerful (6ft+)</SelectItem>
                      <SelectItem value="all-conditions">All conditions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Board Type</Label>
                  <Select value={formData.boardType} onValueChange={(v) => handleChange('boardType', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select board type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shortboard">Shortboard</SelectItem>
                      <SelectItem value="fish">Fish</SelectItem>
                      <SelectItem value="funboard">Funboard</SelectItem>
                      <SelectItem value="longboard">Longboard</SelectItem>
                      <SelectItem value="gun">Gun / Step-up</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <Label htmlFor="length">Length</Label>
                    <Input id="length" value={formData.length} onChange={(e) => handleChange('length', e.target.value)} placeholder="6′2″" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="width">Width</Label>
                    <Input id="width" value={formData.width} onChange={(e) => handleChange('width', e.target.value)} placeholder="19 1/4″" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="thickness">Thickness</Label>
                    <Input id="thickness" value={formData.thickness} onChange={(e) => handleChange('thickness', e.target.value)} placeholder="2 1/2″" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label>Fin System</Label>
                  <Select value={formData.finSystem} onValueChange={(v) => handleChange('finSystem', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose fin system" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fcs-ii">FCS II</SelectItem>
                      <SelectItem value="futures">Futures</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Fin Setup</Label>
                  <Select value={formData.finSetup} onValueChange={(v) => handleChange('finSetup', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose fin setup" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="twin">Twin</SelectItem>
                      <SelectItem value="thruster">Thruster</SelectItem>
                      <SelectItem value="quad">Quad</SelectItem>
                      <SelectItem value="5-fin">5 Fin</SelectItem>
                      <SelectItem value="2+1">2 + 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Tail Shape</Label>
                  <Select value={formData.tailShape} onValueChange={(v) => handleChange('tailShape', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose tail" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="squash">Squash</SelectItem>
                      <SelectItem value="round">Round</SelectItem>
                      <SelectItem value="pin">Pin</SelectItem>
                      <SelectItem value="swallow">Swallow</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Glassing</Label>
                  <Select value={formData.glassing} onValueChange={(v) => handleChange('glassing', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose glassing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="team-light">Team Light</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="strong">Strong</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Finishing</Label>
                  <Select value={formData.finishing} onValueChange={(v) => handleChange('finishing', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose finishing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">Regular</SelectItem>
                      <SelectItem value="matte">Matte</SelectItem>
                      <SelectItem value="glossy">Glossy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Construction</Label>
                  <Select value={formData.construction} onValueChange={(v) => handleChange('construction', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose construction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pu-pe">PU / PE</SelectItem>
                      <SelectItem value="eps-epoxy">EPS / Epoxy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6">
              <div>
                <Label>Artwork Style</Label>
                <Input value={formData.artwork} onChange={(e) => handleChange('artwork', e.target.value)} placeholder="e.g. Resin tint, hand-painted, traditional motifs" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="artworkDescription">Artwork Description</Label>
                <Textarea id="artworkDescription" rows={3} value={formData.artworkDescription} onChange={(e) => handleChange('artworkDescription', e.target.value)} placeholder="Describe your artwork vision" className="mt-1" />
              </div>

              <div>
                <Label>Budget Range</Label>
                <Select value={formData.budget} onValueChange={(v) => handleChange('budget', v)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-500">Under $500</SelectItem>
                    <SelectItem value="500-750">$500 - $750</SelectItem>
                    <SelectItem value="750-1000">$750 - $1,000</SelectItem>
                    <SelectItem value="1000-1500">$1,000 - $1,500</SelectItem>
                    <SelectItem value="over-1500">Over $1,500</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Pickup/Shipping</Label>
                <Select value={formData.pickupShipping} onValueChange={(v) => handleChange('pickupShipping', v)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose pickup/shipping" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup-uluwatu">Free in store pickup (Uluwatu)</SelectItem>
                    <SelectItem value="pickup-seminyak">Free in store pickup (Seminyak)</SelectItem>
                    <SelectItem value="shipping">Shipping (include address in notes)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea id="additionalNotes" rows={4} value={formData.additionalNotes} onChange={(e) => handleChange('additionalNotes', e.target.value)} placeholder="Anything else we should know?" className="mt-1" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button onClick={handleSubmitWhatsApp} className="flex-1">Submit Order via WhatsApp</Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-3">We’ll reply with a quote and timeline within 24 hours.</p>
          </div>

          {/* Models */}
          <section className="max-w-6xl mx-auto mb-12 mt-20">
            <h2 className="font-serif text-2xl font-semibold mb-6">Some of our favorite models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 bg-white">
                <h3 className="font-serif text-xl font-semibold mb-2">Pyzel Ghost</h3>
                <p className="text-muted-foreground">The Ghost is possibly the first truly High Performance board that works great for all levels of surfer and could be considered a one-board quiver for any surf trip with decent to good waves on the menu.</p>
              </div>
              <div className="border rounded-lg p-6 bg-white">
                <h3 className="font-serif text-xl font-semibold mb-2">Drifter Kingfisher</h3>
                <p className="text-muted-foreground">A Fish with a high intellect. Steering away from the stock standard wide and flat Fish of the past, the Kingfisher has a great blend of modern rails, performance rocker and comfort in the pocket.</p>
              </div>
              <div className="border rounded-lg p-6 bg-white">
                <h3 className="font-serif text-xl font-semibold mb-2">Pyzel Padillac</h3>
                <p className="text-muted-foreground">Like the name implies, this board is built to paddle fast and easy, with extra thickness and a fuller outline than most standard guns so you can catch and ride bigger waves with confidence and ease.</p>
              </div>
              <div className="border rounded-lg p-6 bg-white">
                <h3 className="font-serif text-xl font-semibold mb-2">Drifter Bodhi</h3>
                <p className="text-muted-foreground">Faster than you can imagine with the feel of a performance shortboard. We found a good balance between being able to easily generate speed without excessive pumping but still holding off the bottom.</p>
              </div>
            </div>
          </section>

          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Custom;


