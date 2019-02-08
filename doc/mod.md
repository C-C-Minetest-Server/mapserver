
# Mapserver mod

If the `mapserver-mod` is installed and configured
you get more realtime-data from within your minetest-world:

* Current players with their positions
* Current time and max lag

You can use the `mapserver-mod` either passive or active:
* *Passive* Makes some additional markers available (POI, etc)
* *Active* Communicates with the mapserver and sends realtime data (players, lag, time)

## Installing and configuring the bridge-mod

The mod itself is available in the git [repo](./mapserver_mod)
or as a zip package in the [releases](./releases)

## Active mode

The mod communicates via http with the mapserver.
You need to configure the *url* and the *secretkey* in your `minetest.conf`

* Install the mapserver mod in your minetest instance
* Copy the `secretkey` from your `mapserver.json` (this is an autogenerated key)
* Enable http for the `mapserver` mod in your `minetest.conf`
* Configure your `minetest.conf` with the settings: `mapserver.url` and `mapserver.key`

Example config:
```
secure.http_mods = mapserver
mapserver.url = http://127.0.0.1:8080
mapserver.key = ZJoSpysiKGlYexof
```