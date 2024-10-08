import { Suspense } from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUsePost";
import getAllUsers from "@/lib/getAllUsers";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user.name) {
    return {
      title: "User Not Found",
    };
  }
  return {
    title: user.name,
    description: `this is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;
  
  if(!user.name) return notFound()
    
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading ...</h2>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ userId: user.id.toString() }));
}
