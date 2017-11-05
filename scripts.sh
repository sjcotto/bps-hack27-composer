

composer archive create -a dist/my-network.bna --sourceType dir --sourceName .

# composer network deploy -a dist/my-network.bna -p hlfv1 -i PeerAdmin -s randomString -A admin -S

composer network update -a dist/my-network.bna -p hlfv1 -i admin -s randomString

#DO NOT USE IT: composer network undeploy -n bps-hackathon17 -p hlfv1 -i admin -s randomString


composer-rest-server -p hlfv1 -n bps-hackathon2017 -i admin -s randomString 