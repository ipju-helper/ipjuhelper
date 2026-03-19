'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs';
import { TypographySection } from './_components/typography-section';
import { ColorsSection } from './_components/colors-section';
import { LogoSection } from './_components/logo-section';
import { IconsSection } from './_components/icons-section';
import { ControlsSection } from './_components/controls-section';

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-8 py-16">
      <h1 className="mb-8 text-3xl font-bold">Design System</h1>

      <Tabs defaultValue="typography">
        <TabsList>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="logo">Logo</TabsTrigger>
          <TabsTrigger value="icons">Icons</TabsTrigger>
          <TabsTrigger value="controls">Controls</TabsTrigger>
        </TabsList>

        <TabsContent value="typography" className="space-y-12 pt-8">
          <TypographySection />
        </TabsContent>
        <TabsContent value="colors" className="space-y-8 pt-8">
          <ColorsSection />
        </TabsContent>
        <TabsContent value="logo" className="space-y-8 pt-8">
          <LogoSection />
        </TabsContent>
        <TabsContent value="icons" className="pt-8">
          <IconsSection />
        </TabsContent>
        <TabsContent value="controls" className="space-y-12 pt-8">
          <ControlsSection />
        </TabsContent>
      </Tabs>
    </main>
  );
}
