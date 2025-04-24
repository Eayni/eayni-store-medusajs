import { Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <Image
          src="/logo.png"
          alt="hero"
          width={500}
          height={200}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ui-bg-base opacity-50" />
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Eayni Association for cooperative recycling
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Shop Now and be a part of the change!
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
