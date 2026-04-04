import wsChannel from '../../WebSocketChannel.js';
import layerMgr from '../../LayerManager.js';

const TRAIN_URLS = {
  // Basic Trains
  "advtrains:subway_wagon": "pics/advtrains/advtrains_subway_wagon_inv.png",
  "advtrains:engine_japan":  "pics/advtrains/advtrains_engine_japan_inv.png",
  "advtrains:wagon_japan":  "pics/advtrains/advtrains_wagon_japan_inv.png",
  "advtrains:newlocomotive":  "pics/advtrains/advtrains_engine_steam_inv.png",
  "advtrains:detailed_steam_engine":  "pics/advtrains/advtrains_detailed_engine_steam_inv.png",
  "advtrains:engine_industrial":  "pics/advtrains/advtrains_engine_industrial_inv.png",
  "advtrains:engine_industrial_big":  "pics/advtrains/advtrains_engine_industrial_inv.png",
  "advtrains:wagon_tank": "pics/advtrains/advtrains_wagon_tank_inv.png",
  "advtrains:wagon_wood":  "pics/advtrains/advtrains_wagon_wood_inv.png",
  "advtrains:wagon_box":  "pics/advtrains/advtrains_wagon_box_inv.png",
  "advtrains:wagon_default":  "pics/advtrains/advtrains_wagon_inv.png",

  // Colored Subway Wagons 
  "advtrains:subway_wagon_blue": "pics/advtrains/advtrains_subway_wagon_inv_blue.png",
  "advtrains:subway_wagon_red": "pics/advtrains/advtrains_subway_wagon_inv_red.png",
  "advtrains:subway_wagon_green": "pics/advtrains/advtrains_subway_wagon_inv_green.png",

  // Freight trains by MBB
  "advtrains:diesel_lokomotive": "pics/advtrains/advtrains_engine_diesel_inv.png",
  "advtrains:wagon_gravel": "pics/advtrains/advtrains_wagon_gravel_inv.png",
  "advtrains:wagon_lava": "pics/advtrains/advtrains_wagon_lava_inv.png",
  "advtrains:wagon_track": "pics/advtrains/advtrains_wagon_track_inv.png",
  "advtrains:wagon_tree": "pics/advtrains/advtrains_wagon_tree_inv.png",

  // JR E231
  "advtrains:KuHa_E231": "pics/advtrains/advtrains_KuHa_E231_inv.png",
  "advtrains:MoHa_E230": "pics/advtrains/advtrains_MoHa_E230_inv.png",
  "advtrains:MoHa_E231": "pics/advtrains/advtrains_MoHa_E231_inv.png",
  "advtrains:SaHa_E231": "pics/advtrains/advtrains_SaHa_E231_inv.png",

  // Doxy's minitrams
  "minitram_konstal_105:minitram_konstal_105_normal": "pics/advtrains/minitram_konstal_105_normal_inv.png",

  // Subways
  "subways_01700_series:01700_series": "pics/advtrains/01700_series_inv.png",
  "subways_13000_class_lead:13000_class_lead": "pics/advtrains/13000_class_lead_inv.png",
  "subways_13000_class_intermediate:13000_class_intermediate": "pics/advtrains/13000_class_intermediate_inv.png",
  "subways_30000_series_lead:30000_series_lead": "pics/advtrains/30000_series_lead_inv.png",
  "subways_30000_series_intermediate:30000_series_intermediate": "pics/advtrains/30000_series_intermediate_inv.png",
  "subways_lrv_p3010:lrv_p3010": "pics/advtrains/p3010_inv.png",
  "subways_lrv_type_9:lrv_type_9": "pics/advtrains/type_9_inv.png",
  "subways_lrv_type_9_middle:lrv_type_9_middle": "pics/advtrains/type_9_middle_inv.png",
  "subways_mpl16:mpl16": "pics/advtrains/mpl16_inv.png",

  // Subways legacy alias
  "advtrains:red_subway_wagon": "pics/advtrains/01700_series_inv.png",

  // Dlxtrains Diesel Locomotives
  "dlxtrains_diesel_locomotives:locomotive_type1": "pics/advtrains/dlxtrains_diesel_locomotives_locomotive_type1_inv.png",
  "dlxtrains_diesel_locomotives:locomotive_type2": "pics/advtrains/dlxtrains_diesel_locomotives_locomotive_type2_inv.png",
  "dlxtrains_diesel_locomotives:locomotive_type3": "pics/advtrains/dlxtrains_diesel_locomotives_locomotive_type3_inv.png",

  // Dlxtrains industrial wagons
  "dlxtrains_industrial_wagons:container_type1": "pics/advtrains/dlxtrains_industrial_wagons_container_type1_inv.png",
  "dlxtrains_industrial_wagons:container_type2": "pics/advtrains/dlxtrains_industrial_wagons_container_type2_inv.png",
  "dlxtrains_industrial_wagons:covered_goods_type1": "pics/advtrains/dlxtrains_industrial_wagons_covered_goods_type1_inv.png",
  "dlxtrains_industrial_wagons:covered_goods_type2": "pics/advtrains/dlxtrains_industrial_wagons_covered_goods_type2_inv.png",
  "dlxtrains_industrial_wagons:covered_goods_type3": "pics/advtrains/dlxtrains_industrial_wagons_covered_goods_type3_inv.png",
  "dlxtrains_industrial_wagons:flat_type1": "pics/advtrains/dlxtrains_industrial_wagons_flat_type1_inv.png",
  "dlxtrains_industrial_wagons:flat_type2": "pics/advtrains/dlxtrains_industrial_wagons_flat_type2_inv.png",
  "dlxtrains_industrial_wagons:hopper_type1": "pics/advtrains/dlxtrains_industrial_wagons_hopper_type1_inv.png",
  "dlxtrains_industrial_wagons:hopper_type2": "pics/advtrains/dlxtrains_industrial_wagons_hopper_type2_inv.png",
  "dlxtrains_industrial_wagons:livestock_type1": "pics/advtrains/dlxtrains_industrial_wagons_livestock_type1_inv.png",
  "dlxtrains_industrial_wagons:open_type1": "pics/advtrains/dlxtrains_industrial_wagons_open_type1_inv.png",
  "dlxtrains_industrial_wagons:open_type2": "pics/advtrains/dlxtrains_industrial_wagons_open_type2_inv.png",
  "dlxtrains_industrial_wagons:open_type3": "pics/advtrains/dlxtrains_industrial_wagons_open_type3_inv.png",
  "dlxtrains_industrial_wagons:stake_type1": "pics/advtrains/dlxtrains_industrial_wagons_stake_type1_inv.png",
  "dlxtrains_industrial_wagons:tank_type1": "pics/advtrains/dlxtrains_industrial_wagons_tank_type1_inv.png",
  "dlxtrains_industrial_wagons:tank_type2": "pics/advtrains/dlxtrains_industrial_wagons_tank_type2_inv.png",
  "dlxtrains_industrial_wagons:transition_type1": "pics/advtrains/dlxtrains_industrial_wagons_transition_type1_inv.png",
  
  // Dlxtrains support wagons
  "dlxtrains_support_wagons:caboose_type1": "pics/advtrains/dlxtrains_support_wagons_caboose_type1_inv.png",
  "dlxtrains_support_wagons:escort_type1": "pics/advtrains/dlxtrains_support_wagons_escort_type1_inv.png",

  // Moretrains basic
  "advtrains:moretrains_railroad_car": "pics/advtrains/moretrains_railroad_car_inv.png",
  "advtrains:moretrains_silberling": "pics/advtrains/moretrains_silberling_inv.png",
  "advtrains:moretrains_silberling_dining": "pics/advtrains/moretrains_silberling_dining_inv.png",
  "advtrains:moretrains_diesel_german": "pics/advtrains/moretrains_diesel_german_inv.png",
  "advtrains:moretrains_silberling_train": "pics/advtrains/moretrains_silberling_train_inv.png",

  // Moretrains Gondola (base type only, all others are conveted to this one)
  "advtrains:moretrains_wagon_gondola": "pics/advtrains/moretrains_wagon_gondola_inv.png",

  // Moretrains industrial
  "advtrains:moretrains_wagon_tank": "pics/advtrains/moretrains_wagon_tank_inv.png",
  "advtrains:moretrains_wagon_tank2": "pics/advtrains/moretrains_wagon_tank2_inv.png",
  "advtrains:moretrains_wagon_wood": "pics/advtrains/moretrains_wagon_wood_inv.png",
  "advtrains:moretrains_wagon_wood_loaded": "pics/advtrains/moretrains_wagon_wood_loaded_inv.png",
  "advtrains:moretrains_wagon_wood_acacia": "pics/advtrains/moretrains_wagon_wood_acacia_inv.png",
  "advtrains:moretrains_wagon_wood_jungle": "pics/advtrains/moretrains_wagon_wood_jungle_inv.png",
  "advtrains:moretrains_wagon_wood_pine": "pics/advtrains/moretrains_wagon_wood_pine_inv.png",
  "advtrains:moretrains_wagon_wood_aspen": "pics/advtrains/moretrains_wagon_wood_aspen_inv.png",
  "advtrains:moretrains_wagon_box": "pics/advtrains/moretrains_wagon_box_inv.png",

  // Moretrains Japan
  "advtrains:moretrains_engine_japan": "pics/advtrains/moretrains_engine_japan_inv.png",
  "advtrains:moretrains_wagon_japan": "pics/advtrains/moretrains_wagon_japan_inv.png",

  // Moretrains nightline
  "advtrains:moretrains_nightline_couchette": "pics/advtrains/moretrains_nightline_couchette_inv.png",
  "advtrains:moretrains_nightline_seat_car": "pics/advtrains/moretrains_nightline_seat_car_inv.png",

  // Moretrains steam
  "advtrains:moretrains_steam_train": "pics/advtrains/moretrains_steam_train_inv.png",
  "advtrains:moretrains_tender": "pics/advtrains/moretrains_steam_tender_inv.png",

  // Moretrains vintage
  "advtrains:moretrains_draisine": "pics/advtrains/moretrains_draisine_inv.png",
  "advtrains:moretrains_minecart": "pics/advtrains/moretrains_minecart_inv.png",
  "advtrains:moretrains_minecart_loaded": "pics/advtrains/moretrains_minecart_loaded_inv.png",
  "advtrains:moretrains_minecart_engine": "pics/advtrains/moretrains_minecart_engine_inv.png",

  // Classic Coaches
  "classic_coaches:bistro_coach": "pics/classic_coaches/classic_coaches_bistro_coach_inv.png",
  "classic_coaches:corridor_coach_class1": "pics/classic_coaches/classic_coaches_corridor_coach_class1_inv.png",
  "classic_coaches:corridor_coach_class2": "pics/classic_coaches/classic_coaches_corridor_coach_class2_inv.png",
  "classic_coaches:open_coach_class1": "pics/classic_coaches/classic_coaches_open_coach_class1_inv.png",
  "classic_coaches:open_coach_class2": "pics/classicCoaches/classicCoaches_openCoach_class2_inv.png",

  // Linetracks
  "advtrains:boat": "pics/advtrains/linetrack_boat_inv.png",
  "advtrains:bus": "pics/advtrains/linetrack_tcb.png", // temp
};

function getTrainImageUrlForType(type){
  return TRAIN_URLS[type] || TRAIN_URLS["advtrains:subway_wagon"];
}

let trains = [];

//update trains all the time
wsChannel.addListener("minetest-info", function(info){
  trains = info.trains || [];
});

export default L.LayerGroup.extend({
  initialize: function() {
    L.LayerGroup.prototype.initialize.call(this);

    this.currentObjects = {}; // name => marker

    this.onMinetestUpdate = this.onMinetestUpdate.bind(this);
  },

  createPopup: function(train){
    var html = "<b>Train</b><hr>";

    html += "<b>Name:</b> " + train.text_outside + "<br>";
    html += "<b>Line:</b> " + train.line + "<br>";
    html += "<b>Velocity:</b> "+ Math.floor(train.velocity*10)/10 + "<br>";

    if (train.wagons){
	    html += "<b>Composition: </b>";
	    train.wagons.forEach(function(w){
	      var iconUrl =  getTrainImageUrlForType(w.type);
	      html += "<img src='"+iconUrl+"' width=16 height=16 title='"+w.type+"' />";
	    });
    }

    return html;
  },


  getMaxDisplayedZoom: function(){
    return 7;
  },

  createMarker: function(train){

    //search for wagon in front (whatever "front" is...)
    var type;
    var lowest_pos = 100;
    if (train.wagons){
    	train.wagons.forEach(function(w){
      		if (w.pos_in_train < lowest_pos){
       			lowest_pos = w.pos_in_train;
       			type = w.type;
      		}
    	});
    }

    var Icon = L.icon({
      iconUrl: getTrainImageUrlForType(type),

      iconSize:     [16, 16],
      iconAnchor:   [8, 8],
      popupAnchor:  [0, -16]
    });

    var marker = L.marker([train.pos.z + 0.5, train.pos.x + 0.5], {icon: Icon});
    marker.bindPopup(this.createPopup(train));

    return marker;
  },

  isTrainInCurrentLayer: function(train){
    var mapLayer = layerMgr.getCurrentLayer();

    return (train.pos.y >= (mapLayer.from*16) && train.pos.y <= (mapLayer.to*16));
  },


  onMinetestUpdate: function(/*info*/){

    if (this.map.getZoom() < this.getMaxDisplayedZoom()) {
      this.clearLayers();
      this.currentObjects = {};
      return;
    }

    trains.forEach(train => {
      var isInLayer = this.isTrainInCurrentLayer(train);

      if (!isInLayer){
        if (this.currentObjects[train.id]){
          //train is displayed and not on the layer anymore
          //Remove the marker and reference
          this.currentObjects[train.id].remove();
          delete this.currentObjects[train.id];
        }

        return;
      }

      if (this.currentObjects[train.id]){
        //marker exists
        let marker = this.currentObjects[train.id];
        marker.setLatLng([train.pos.z + 0.5, train.pos.x + 0.5]);
        marker.setPopupContent(this.createPopup(train));

      } else {
        //marker does not exist
        let marker = this.createMarker(train);
        marker.addTo(this);

        this.currentObjects[train.id] = marker;
      }
    });

    Object.keys(this.currentObjects).forEach(existingId => {
      var trainIsActive = trains.find(function(t){
        return t.id == existingId;
      });

      if (!trainIsActive){
        //train
        this.currentObjects[existingId].remove();
        delete this.currentObjects[existingId];
      }
    });
  },

  reDraw: function(){
    this.currentObjects = {};
    this.clearLayers();

    if (this.map.getZoom() < this.getMaxDisplayedZoom()) {
      return;
    }

    trains.forEach(train => {
      if (!this.isTrainInCurrentLayer(train)){
        //not in current layer
        return;
      }

      var marker = this.createMarker(train);
      marker.addTo(this);
      this.currentObjects[train.id] = marker;
    });

  },

  onAdd: function(map) {
    this.map = map;
    wsChannel.addListener("minetest-info", this.onMinetestUpdate);
    this.reDraw();
  },

  onRemove: function(/*map*/) {
    this.clearLayers();
    wsChannel.removeListener("minetest-info", this.onMinetestUpdate);
  }
});
