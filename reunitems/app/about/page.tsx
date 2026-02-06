import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <div 
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/banner.png')" }}
        >
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 ml-5 mr-5 mt-8">
          <div className="lg:w-[55%] w-full bg-brand-blue">
            <h3 className="font-bold text-3xl mt-4">Lost something important? Found an item that belongs to someone else? You're in the right place.</h3>
            <p className="text-3xl mt-4">Our smart lost and found platform makes it easier than ever to recover lost belongings and return found items to their rightful owners. Whether you dropped your keys on campus, left your laptop in a coffee shop, or found someone's wallet – we're here to help reconnect people with their possessions.</p>
          </div>

          <div className="lg:w-[45%] w-full">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden">
              <Image 
                src="/assets/lostandfound.png"
                alt="Lost and Found Illustration"
                width={800} 
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}