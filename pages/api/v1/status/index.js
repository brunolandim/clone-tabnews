import database from "infra/database";

async function status(request, response) {
  const result = await database.query(`
    SELECT
      current_setting('server_version') AS server_version,
      current_setting('max_connections')::int AS max_connections ;
  `);
  
  const databaseName = process.env.POSTGRES_DB;
  const dataBaseConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const { server_version, max_connections } = result.rows[0];

  const updatedAt = new Date().toISOString();
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: server_version,
        max_connections: parseInt(max_connections),
        connections_in_use: dataBaseConnections.rows[0].count,
      },
    },
  });
}

export default status;
