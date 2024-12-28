---
title: My AirBnb Clone Project
excerpt: Build Airbnb Full-Stack App with Next.js 14+, Typescript, Clerk Auth, Prisma, Supabase, Tailwind, Shadcn-ui, Zod,Vercel
image: maxresdefault.jpg
isFeatured: false
date: "2024-11-20"
---

## What is this Project About?

This **Project** is about builting a a fully functional Airbnb clone using Next.js 14+.

I recently took the "Build Airbnb Full-Stack App with Next.js 14+, TypeScript, Clerk Auth, etc".

Throughout the course, I built a fully functional Airbnb clone using Next.js 14+

for the front-end and back-end,along with TypeScript for type safety.

I integrated Clerk for user authentication,used Prisma for database management,

and Supabase for real-time data storage. The app's UI was styled using Tailwind CSS and Shadcn-ui,

while Zod helped me with schema validation

## Here are some examples of My AirBnb Clone Project

```js
const basics = 'Okay, that should not be too difficult actually';

export const updatePropertyImageAction = async (
  prevState: any,
  formData: FormData

): Promise<{ message: string }> => {
  const user = await getAuthUser();
  const propertyId = formData.get("id") as string;

  try {
    const image = formData.get("image") as File;

    const validatedFields = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFields.image);
    await db.property.update({
      where: {
        id: propertyId,
        profileId: user.id,
      },
      data: {
        image: fullPath,
      },
    });
    revalidatePath(`/rentals/${propertyId}/edit`);
    return { message: "Property Image Updated Successful" };
  } catch (error) {
    return renderError(error);
  }
};
```

Learn more about it [here](https://github.com/RkariNaJA/temp-home-away).
