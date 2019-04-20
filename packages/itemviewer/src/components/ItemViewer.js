"use strict";
exports.__esModule = true;
var React = require("react");
var ListItems_1 = require("./ListItems");
require("./Viewer.css");
function ItemViewer(props) {
    var items = props.items, onDelete = props.onDelete, onHide = props.onHide, toolbar = props.toolbar, hidden = props.hidden;
    return (<div className="Viewer">
			{toolbar}
			<ListItems_1["default"] items={items} onDelete={onDelete} onHide={onHide} hidden={hidden}/>
		</div>);
}
ItemViewer.defaultProps = {
    toolbar: null
};
exports["default"] = ItemViewer;
