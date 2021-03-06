const React = require('react');
const classNames = require('classnames');

const FeedbackModal = require('./feedback_modal.jsx');

const map = require('../js/map');

class MapLayers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class1: false,
      class2: true,
      class3: true,
      bikeParking: false,
      bikeShops: false,
      construction: true,
      winter: true,
      visible: !this.props.isMobile,
    };

    this.toggleConstruction = () => {
      map.toggleLayer('construction', !this.state.construction);
      this.setState({
        construction: !this.state.construction,
      });
    };

    this.toggleClass1 = () => {
      map.toggleLayer('class1', !this.state.class1);
      this.setState({
        class1: !this.state.class1,
      });
    };

    this.toggleClass2 = () => {
      map.toggleLayer('class2', !this.state.class2);
      this.setState({
        class2: !this.state.class2,
      });
    };

    this.toggleClass3 = () => {
      map.toggleLayer('class3', !this.state.class3);
      this.setState({
        class3: !this.state.class3,
      });
    };

    this.toggleBikeParking = () => {
      map.toggleLayer('bikeParking', !this.state.bikeParking);
      this.setState({
        bikeParking: !this.state.bikeParking,
      });
    };

    this.toggleBikeShops = () => {
      map.toggleLayer('bikeShops', !this.state.bikeShops);
      this.setState({
        bikeShops: !this.state.bikeShops,
      });
    };

    this.toggleWinter = () => {
      map.toggleLayer('winter', !this.state.winter);
      this.setState({
        winter: !this.state.winter,
      });
    };

    this.toggleMapLayersVisibility = () => {
      this.setState({
        visible: !this.state.visible,
      });
    };
  }

  render() {
    if (!this.state.visible) {
      return (
        <div
          className="map-layers-open-box"
          onClick={this.toggleMapLayersVisibility}
        >Toggle Map Layers</div>
      );
    }

    return (
      <div className={classNames('map-layers', 'hidden-print', { hide: !this.state.visible })}>
        <div
          className="close-box"
          onClick={this.toggleMapLayersVisibility}
        >&minus;</div>
        <div>
          <div className="map-layer-legend construction"></div>
          <label>
            <input
              type="checkbox"
              checked={this.state.construction}
              onChange={this.toggleConstruction}
            />
            <span>Construction</span>
          </label>
        </div>
        <div>
          <div className="map-layer-legend bikeParking"></div>
          <label>
            <input
              type="checkbox"
              checked={this.state.bikeParking}
              onChange={this.toggleBikeParking}
            />
            <span>Bike Parking</span>
          </label>
        </div>
        <div>
          <div className="map-layer-legend bikeShops"></div>
          <label>
            <input
              type="checkbox"
              checked={this.state.bikeShops}
              onChange={this.toggleBikeShops}
            />
            <span>Bike Shops</span>
          </label>
        </div>
        <div title="paved, separated (off the street) bikeways">
          <div className="map-layer-legend class1"></div>
          <label>
            <input
              type="checkbox"
              checked={this.state.class1}
              onChange={this.toggleClass1}
            />
            <span>Multi-use Path</span>
          </label>
        </div>
        <div title="dedicated on-street bikeways, marked by striping on pavement">
          <div className="map-layer-legend class2"></div>
          <label>
            <input
              type="checkbox"
              checked={this.state.class2}
              onChange={this.toggleClass2}
            />
            <span>Bike Lane</span>
          </label>
        </div>
        <div title="on-street routes signed for bicyclists">
          <div className="map-layer-legend class3"></div>
          <label>
            <input
              type="checkbox"
              checked={this.state.class3}
              onChange={this.toggleClass3}
            />
            <span>Bike Route</span>
          </label>
        </div>
        <div title="Plowed bike paths for winter access. Paths are plowed after streets.">
          <div className="map-layer-legend winter"></div>
          <label>
            <input
              type="checkbox"
              checked={this.state.winter}
              onChange={this.toggleWinter}
            />
            <span>Plowed Winter Path</span>
          </label>
        </div>
        <FeedbackModal />
      </div>
    );
  }
}

MapLayers.propTypes = {
  isMobile: React.PropTypes.bool.isRequired,
};

module.exports = MapLayers;
