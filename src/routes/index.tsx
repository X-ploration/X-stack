import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button";
import XGlow from "~/components/x-glow/x-glow";

import { LuStar } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <>
      <div class="relative h-[100vh] w-[100vw] flex-col bg-gray-950 text-white">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <XGlow />
        </div>
        <div class="absolute  top-24 flex w-full justify-around">
          <div class="hidden  md:block">
            <Button variant="link">
              <div class="text-white drop-shadow-[0_0_10px_#fff] md:flex md:items-center">
                <LuStar class="mr-2" />
                Star us on Github
              </div>
            </Button>
          </div>
          <div class="md:hidden" />
          <div class="drop-shadow-[0_0_2px_#fff]">
            <Button variant="outline">Sign Out</Button>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "X-Stack",
  meta: [
    {
      name: "x-stack starter template",
      content: "A template to start your project with x-tra peace of mind.",
    },
  ],
};
