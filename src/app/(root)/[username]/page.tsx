import React, { Fragment } from "react";
import { ProfileBanner } from "src/components/server/banner/creators";
import { CreaterProfileCard } from "src/components/server/cards/creators";
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

  return (
    <Fragment>
      <ProfileBanner bannerImage={user?.banner} />
      <CreaterProfileCard {...user!} />
    </Fragment>
  );
}

export default ProfilePage;
