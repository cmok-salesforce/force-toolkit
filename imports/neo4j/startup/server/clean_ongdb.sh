ONGDB_ROOT=~/MEGA/tools/ongdb-enterprise-3.4.9
echo "Stop Neo4J."
$ONGDB_ROOT/bin/neo4j stop
cd $ONGDB_ROOT/data/databases/
rm -Rf graph.db
echo "Open Native Graph DB is clean."
$ONGDB_ROOT/bin/neo4j start
echo "Started Neo4J ..."
#tail -200f $ONGDB_ROOT/logs/neo4j.log