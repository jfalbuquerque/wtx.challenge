import useUser from "../hooks/useUser";

const MyAccount = () => {
  const { user, isLoading } = useUser();

  return (
    <div>
      <h1>My account</h1>
      <section>
        <h2>User data</h2>
        {isLoading ? (
          <div>Loading Data!</div>
        ) : (
          <>
            <div>
              <label>username</label>
              <input type="text" readOnly value={user?.username} />
            </div>
            <div>
              <label>address</label>
              <input type="text" readOnly value={user?.address} />
            </div>
            <div>
              <label>country</label>
              <input type="text" readOnly value={user?.country} />
            </div>
          </>
        ) }
      </section>
    </div>
  );
};

export default MyAccount;
