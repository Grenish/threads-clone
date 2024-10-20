import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Hello </h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete Your Profile
      </p>
      <section className="mt-9 bg-dark-2 p-10 rounded-xl">
        <AccountProfile />
      </section>
    </div>
  );
}

export default Page;
