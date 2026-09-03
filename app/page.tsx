import Image from "next/image";
import {Button} from '@/components/ui/button'
export default function Home() {
  /*
    default page of the application
    */
  return (
     <div>
         <h1 className="font-game text-4xl text-center">Hello World</h1>
         <Button>Hello </Button>
     </div>



  );
}
