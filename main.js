window.onload = function(){
  var dic = [
  'http://sociorocketnewsen.files.wordpress.com/2013/07/bullet_cat1.jpg?w=580&h=403',
  'http://www.thepoke.co.uk/wp-content/uploads/2013/05/Lions-Mane-Cat-Hat.jpg',
  'http://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-36.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr07/4/16/enhanced-16354-1396642706-25.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr07/9/12/enhanced-buzz-28527-1397060122-10.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr08/9/14/enhanced-11714-1397069467-10.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr07/9/14/enhanced-18798-1397069417-26.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr08/9/14/enhanced-11623-1397069418-9.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr04/9/14/enhanced-25062-1397069413-11.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr06/9/14/enhanced-11630-1397069412-6.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr07/9/14/enhanced-buzz-18793-1397069650-11.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr08/9/14/enhanced-11796-1397069419-11.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr06/9/14/enhanced-475-1397069469-16.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr06/25/7/enhanced-16927-1398424096-2.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr06/9/14/enhanced-buzz-11719-1397069683-9.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr04/4/16/enhanced-3044-1396642692-22.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr02/9/17/enhanced-buzz-5632-1397079234-23.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr06/4/16/enhanced-23752-1396643152-1.jpg',
  'http://images.boomsbeat.com/data/images/full/24381/cat_1-jpg.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr08/9/17/enhanced-buzz-3223-1397079555-5.jpg',
  'http://s3-ec.buzzfed.com/static/2014-04/enhanced/webdr02/4/16/enhanced-11965-1396642690-26.jpg',
  'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  'http://2.bp.blogspot.com/-j0OXicuC-tE/UFoJh7TWLuI/AAAAAAAAVlw/2Fcj3QGO-MM/s1600/funny-cat-pictures-016-001.jpg'
  ];

  var pics = "";

  for (var i=0;i<dic.length;i++){
    pics += '<div style="background-image:url(' + dic[i] + ')"></div>';
  }

  document.getElementById("container").innerHTML = pics;
}
