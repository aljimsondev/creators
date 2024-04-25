import React, { Fragment } from "react";
import { ProfileBanner } from "src/components/client/banner/profile";
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
    </Fragment>
  );
}

export default ProfilePage;
