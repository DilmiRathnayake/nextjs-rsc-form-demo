import fs from 'fs/promises';

export default async function UsePromiseDemo() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await fs.readFile(
    process.cwd() + '/dummy-db.json',
    'utf-8'
  );

  const users = JSON.parse(data);

  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
}
