function BestDayScoreModel(statisticsModel){
    this.modelName = " best day";
    this.superModel = statisticsModel;
    this.bestDay= -1;
    this.bestScore = -1;
    this.initQuery();
}

BestDayScoreModel.prototype.initQuery = function(){
	
//	this.values = [];
//	this.valuesLastActivity = [];
	   
	this.query = 'SELECT min(day) as day, sum(score) as score, count(id) as num'
		+ ' FROM statistics WHERE course_id=? AND duration!=-100'
		+ ' GROUP BY DATE(day/1000, "unixepoch")';
};

//BestDayScoreModel.prototype.initQueryValues = function () {
//	this.values = [this.superModel.currentCourseId];
//};


BestDayScoreModel.prototype.calculateValue = function(){
	var self = this;
	
	self.values= self.superModel.getCurrentValues(SUBMODEL_QUERY_ONE);
	//self.initQueryValues();
	self.queryDB( function cbBDS(t,r) {self.calculateBestDayAndScore(t,r);});
};

BestDayScoreModel.prototype.queryDB = queryDatabase;



//calculates the best day and score
BestDayScoreModel.prototype.calculateBestDayAndScore = function(transaction, results) {
	
	moblerlog("best day rows: " + results.rows.length);
	var self = this;
	var i, bestDay;
	var bestScore = -1;
	for (i = 0; i < results.rows.length; i++) {
		row = results.rows.item(i);
		moblerlog(JSON.stringify(row));
		score = 0;
		if (row['num'] !== 0) {
			score = row['score'] / row['num'];
		}
		if (score >= bestScore) {
			bestDay = row['day'];
			bestScore = score;
		}
	}
	moblerlog("best day: " + bestDay);
	this.bestDay = bestDay;
	this.bestScore = Math.round(bestScore * 100);
	moblerlog("best score:"+bestScore);
	$(document).trigger("statisticcalculationsdone");
	this.superModel.boolAllDone++;
	moblerlog("best day calculation done");
	this.superModel.allCalculationsDone();	
};









