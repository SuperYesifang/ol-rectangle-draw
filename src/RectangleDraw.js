class RectangleDraw {
	constructor(Draw, Polygon, options) {
		return new Draw({
			...options,
			type: "Circle",
			geometryFunction(coordinates, reactangle) {
				if (!reactangle) {
					reactangle = new Polygon([]);
				}
				// 根据起始点和终点构造矩形
				if (coordinates.length > 1) {
					let startPoint = coordinates[0];
					let endPoint = coordinates[coordinates.length - 1];
					reactangle.setCoordinates([
						[
							startPoint,
							[endPoint[0], startPoint[1]],
							endPoint,
							[startPoint[0], endPoint[1]],
							startPoint
						]
					]);
				}
				return reactangle;
			}
		});
	}
}

export default RectangleDraw;