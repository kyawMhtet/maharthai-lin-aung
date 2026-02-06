// app/[locale]/(public)/contact/page.tsx
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  return (
    <main className="flex justify-center py-10 px-4 md:px-10 lg:px-20">
      <div className="w-full max-w-[1200px] flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg font-normal leading-normal max-w-[720px]">
            Have a question or need assistance finding the perfect helper? Our
            team is here to help you connect with trusted domestic workers
            across Thailand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Card className="h-fit">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                <p className="text-muted-foreground">
                  We usually respond within 24 hours.
                </p>
              </div>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" className="h-12" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                </div>

                   <div className="flex flex-col gap-2 w-full relative z-10">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject" className="h-12 w-full">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className=" bg-background">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="helper-support">Support for Helpers</SelectItem>
                      <SelectItem value="employer-support">Support for Employers</SelectItem>
                      <SelectItem value="partnership">Business Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you today?"
                    className="min-h-[160px] resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  className="mt-2 h-12 shadow-md hover:shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-10 py-4">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-5 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Our Office</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Sukhumvit Road, Khlong Toei,
                    <br />
                    Bangkok 10110, Thailand
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Phone</h3>
                  <p className="text-muted-foreground">
                    Mon-Fri from 8am to 6pm.
                  </p>
                  <a
                    href="tel:+6621234567"
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    +66 2 123 4567
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Email</h3>
                  <p className="text-muted-foreground">
                    Our friendly team is here to help.
                  </p>
                  <a
                    href="mailto:hello@maharthai.com"
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    hello@maharthai.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border h-[240px] w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5919639030644!2d100.5569615!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjgiTiAxMDDCsDMzJzI1LjEiRQ!5e0!3m2!1sen!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <h3 className="text-lg font-bold">Follow us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all font-bold text-xs"
                  aria-label="LINE"
                >
                  LINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
