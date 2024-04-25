import { notFound } from "next/navigation";
import React, { Fragment } from "react";
import { ProfileBanner } from "src/components/server/banner/creators";
import {
  CreatorContentSection,
  CreatorSocialsSection,
} from "src/components/server/sections/creators";
import { creators } from "src/test-data/creators";

async function getUserDetails(username: string) {
  try {
    //replace this in getting user logic in database
    const user = creators.find((user) => user.username === username);

    return user;
  } catch (e: any) {
    throw new Error("Get user error: " + e);
  }
}

async function ProfilePage({ params }: { params: { username: string } }) {
  const username = params?.username;

  const user = await getUserDetails(username);

  if (!user) return notFound(); //redirect to not found page

  return (
    <Fragment>
      <ProfileBanner {...user} />
      <CreatorSocialsSection />
      <CreatorContentSection />
    </Fragment>
  );
}

export default ProfilePage;
