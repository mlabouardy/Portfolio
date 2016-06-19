
var ExperienceCtrl = function(){
  google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'CNESTEN', new Date(2014, 2 , 1), new Date(2014, 9, 1) ],
          [ 'Freelancer.com', new Date(2014, 9 , 1), new Date(2015, 6, 1) ],
          [ 'Capgemini',      new Date(2015, 6, 1),  new Date(2015, 9, 1) ],
          [ 'Capgemini Digital Factory',  new Date(2016, 4, 1),  new Date(2016, 10, 1) ]]);

        chart.draw(dataTable);
      }
};

var ExperienceComponent = {
  templateUrl : 'app/components/experience/experience.html',
  controller: ExperienceCtrl
};

angular.module('portfolio.components')
  .component('experience', ExperienceComponent);
