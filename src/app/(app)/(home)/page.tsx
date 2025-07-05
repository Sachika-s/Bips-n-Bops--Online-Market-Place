
/*
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {useEffect} from "react";

*/

import configPromise from '@payload-config'
import { getPayload } from 'payload'



export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection:"categories",
  })
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};
