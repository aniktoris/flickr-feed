//import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

interface Error {
  error: string;
}

export const GET = async () => {
  try {
    const response = await fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1');
    if (!response.ok) {
      throw new Error('Failed to fetch data from Flickr');
    }
    const data = await response.json();
    return NextResponse.json({data});
  } catch (error:any) {
    console.error(`Error fetching images: ${error.message}`);
    const errorRes: Error = {error: 'Internal server error'};
    return NextResponse.json(errorRes);
  }
}