// vars
var audioObject, myNavigation;

var spotifyjson = '{"albums":{"href":"https://api.spotify.com/v1/search?query=FOO+FIGHTERS&type=album&market=GB&offset=0&limit=20","items":[{"album_type":"compilation","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/1zCNrbPpz5OLSr6mSpPdKm"},"href":"https://api.spotify.com/v1/albums/1zCNrbPpz5OLSr6mSpPdKm","id":"1zCNrbPpz5OLSr6mSpPdKm","images":[{"height":640,"url":"https://i.scdn.co/image/3b505559c2bce1f6205eeb0b19d65e3a2c8f5617","width":640},{"height":300,"url":"https://i.scdn.co/image/690932c4cdc34270a6421079af4c2afc3f48234a","width":300},{"height":64,"url":"https://i.scdn.co/image/88e091688667eff1085cebeec92cba9d6726c000","width":64}],"track":"https://p.scdn.co/mp3-preview/ed97c86e6f73097ab414e5c1ab599a120853f010?cid=774b29d4f13844c495f206cafdad9c86","name":"Greatest Hits","release_date":"2009-11-03","release_date_precision":"day","total_tracks":16,"type":"album","uri":"spotify:album:1zCNrbPpz5OLSr6mSpPdKm"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/6aba2f4e671ffe07fd60807ca5fef82d48146d4c?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/30ly6F6Xl0TKmyBCU50Khv"},"href":"https://api.spotify.com/v1/albums/30ly6F6Xl0TKmyBCU50Khv","id":"30ly6F6Xl0TKmyBCU50Khv","images":[{"height":640,"url":"https://i.scdn.co/image/82ea041a0c8761445299da55e506995ca1697c29","width":640},{"height":300,"url":"https://i.scdn.co/image/b1a27e6445ebaf4f155b195046c827efb0fd0971","width":300},{"height":64,"url":"https://i.scdn.co/image/a9737cdaeeca75880bacd3ffec4b6ca4cd6bb914","width":64}],"track":"https://p.scdn.co/mp3-preview/2c30c2690ca06b91bcb2d5aea96eb08a8ed232bc?cid=774b29d4f13844c495f206cafdad9c86","name":"The Colour And The Shape (Expanded Edition)","release_date":"1997-05-20","release_date_precision":"day","total_tracks":14,"type":"album","uri":"spotify:album:30ly6F6Xl0TKmyBCU50Khv"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/c40a3fc30f090300ef4d847da4a5fc4e2774d7d3?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/3ilXDEG0xiajK8AbqboeJz"},"href":"https://api.spotify.com/v1/albums/3ilXDEG0xiajK8AbqboeJz","id":"3ilXDEG0xiajK8AbqboeJz","images":[{"height":640,"url":"https://i.scdn.co/image/190e4ea6551fdb5025d216d65b7c3799f49893d7","width":640},{"height":300,"url":"https://i.scdn.co/image/32c880c623ec6c46248987a73f50dc4a61fd14f3","width":300},{"height":64,"url":"https://i.scdn.co/image/9f083f126f2c32455732a0f1e7377f4867c5d1d0","width":64}],"track":"https://p.scdn.co/mp3-preview/ec1a9cb3dda864e7b9c4c0541c50441e02716770?cid=774b29d4f13844c495f206cafdad9c86","name":"Echoes, Silence, Patience & Grace","release_date":"2007-09-25","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:3ilXDEG0xiajK8AbqboeJz"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/d7350c743c3d917f2a1391a73c73b996a24b665e?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/6KMkuqIwKkwUhUYRPL6dUc"},"href":"https://api.spotify.com/v1/albums/6KMkuqIwKkwUhUYRPL6dUc","id":"6KMkuqIwKkwUhUYRPL6dUc","images":[{"height":640,"url":"https://i.scdn.co/image/5840a2e94030104a5f34ecbd3d79541040566a97","width":640},{"height":300,"url":"https://i.scdn.co/image/466a21e8c6f72e540392ae76a94e01c876a8f193","width":300},{"height":64,"url":"https://i.scdn.co/image/f31729bf93335fe308dc2523d8166a3b01505485","width":64}],"track":"https://p.scdn.co/mp3-preview/0386d86d26c150ef9e845d47f68d3a70735a636e?cid=774b29d4f13844c495f206cafdad9c86","name":"Concrete and Gold","release_date":"2017-09-15","release_date_precision":"day","total_tracks":11,"type":"album","uri":"spotify:album:6KMkuqIwKkwUhUYRPL6dUc"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/cf273e411dec252e902e6302e5956550974cf4d4?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/2eprpJCYbCbPZRKVGIEJxZ"},"href":"https://api.spotify.com/v1/albums/2eprpJCYbCbPZRKVGIEJxZ","id":"2eprpJCYbCbPZRKVGIEJxZ","images":[{"height":640,"url":"https://i.scdn.co/image/b1bd8a1eed252877094236bb2131124d01b91815","width":640},{"height":300,"url":"https://i.scdn.co/image/3f65d15655f01fa359c137d0d990153378a9a166","width":300},{"height":64,"url":"https://i.scdn.co/image/ce99c04748e1306eb8a97999584aaed6b58fcec1","width":64}],"track":"https://p.scdn.co/mp3-preview/f3f7ec79b719ef0fd4f093b3c7b1b34cbad26a6c?cid=774b29d4f13844c495f206cafdad9c86","name":"In Your Honor","release_date":"2005-06-14","release_date_precision":"day","total_tracks":20,"type":"album","uri":"spotify:album:2eprpJCYbCbPZRKVGIEJxZ"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/f3f7ec79b719ef0fd4f093b3c7b1b34cbad26a6c?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/5lnQLEUiVDkLbFJHXHQu9m"},"href":"https://api.spotify.com/v1/albums/5lnQLEUiVDkLbFJHXHQu9m","id":"5lnQLEUiVDkLbFJHXHQu9m","images":[{"height":640,"url":"https://i.scdn.co/image/13b3c650142254a1c9191a5cdda961ab051a2659","width":640},{"height":300,"url":"https://i.scdn.co/image/f3c869112d5eaa59f4ede075adc7070458aeeefd","width":300},{"height":64,"url":"https://i.scdn.co/image/01b50b6084284457302dfac50ec0de1387c26547","width":64}],"track":"https://p.scdn.co/mp3-preview/921fd65ce920f80c1730ad0430c6cbffad3079c4?cid=774b29d4f13844c495f206cafdad9c86","name":"Wasting Light","release_date":"2011-04-12","release_date_precision":"day","total_tracks":11,"type":"album","uri":"spotify:album:5lnQLEUiVDkLbFJHXHQu9m"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/a4ca5885cacb94cc7a86d5762e99efff607dbebc?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/28q2N44ocJECgf8sbHEDfY"},"href":"https://api.spotify.com/v1/albums/28q2N44ocJECgf8sbHEDfY","id":"28q2N44ocJECgf8sbHEDfY","images":[{"height":640,"url":"https://i.scdn.co/image/90b8179b5a6785a8feaba72b8b634dc6f82aa6f1","width":640},{"height":300,"url":"https://i.scdn.co/image/1ac8e4ca741c58adc1eee7df60941de7b7e040ab","width":300},{"height":64,"url":"https://i.scdn.co/image/116f3e5659f9a77dcd2da89a31065eed22129bcf","width":64}],"track":"https://p.scdn.co/mp3-preview/8425b144cac10564e3bec63c017f95b3472d685a?cid=774b29d4f13844c495f206cafdad9c86","name":"There Is Nothing Left To Lose","release_date":"1999-11-02","release_date_precision":"day","total_tracks":11,"type":"album","uri":"spotify:album:28q2N44ocJECgf8sbHEDfY"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/c9a6fda7c673f25497e25714ced7bb215d06082f?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/1zQ6F8gMagKcPL4SoA80cx"},"href":"https://api.spotify.com/v1/albums/1zQ6F8gMagKcPL4SoA80cx","id":"1zQ6F8gMagKcPL4SoA80cx","images":[{"height":640,"url":"https://i.scdn.co/image/8851a206aa55a43ecf03f42bad16d2ffd148435c","width":640},{"height":300,"url":"https://i.scdn.co/image/f6d3b5836903cfcb3efc613668dffc13513b099c","width":300},{"height":64,"url":"https://i.scdn.co/image/7b49cecae14bf76242285727bab8c8012bb713ac","width":64}],"track":"https://p.scdn.co/mp3-preview/2ab3bf27a5d02d12ab4af83751796339a263ecea?cid=774b29d4f13844c495f206cafdad9c86","name":"One By One (Expanded Edition)","release_date":"2002-10-22","release_date_precision":"day","total_tracks":17,"type":"album","uri":"spotify:album:1zQ6F8gMagKcPL4SoA80cx"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/a88524e06c4bc2bb5a8918c7b31dde0f23f4a82e?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/4EnNuo8fG7dMoxMefbApRY"},"href":"https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRY","id":"4EnNuo8fG7dMoxMefbApRY","images":[{"height":638,"url":"https://i.scdn.co/image/ed8981be29fdae9019e377f16b101c839f9555b6","width":640},{"height":299,"url":"https://i.scdn.co/image/7dc149ec6e930118babf06db961794450fb7198d","width":300},{"height":64,"url":"https://i.scdn.co/image/8f8e14b11bc8d204b3258985268c0401ac8b233a","width":64}],"track":"https://p.scdn.co/mp3-preview/92534b802628eb619d0668b2040dcdc881e72f08?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","release_date":"1995-07-04","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:4EnNuo8fG7dMoxMefbApRY"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/2qwN15acAl3sm3Idce5vK9"},"href":"https://api.spotify.com/v1/albums/2qwN15acAl3sm3Idce5vK9","id":"2qwN15acAl3sm3Idce5vK9","images":[{"height":640,"url":"https://i.scdn.co/image/657c3f0ca4c89237ec6dcde06027369f05094e2f","width":640},{"height":300,"url":"https://i.scdn.co/image/6d278475761a8cfc11834a729ff3e5973837a32c","width":300},{"height":64,"url":"https://i.scdn.co/image/10d28ac3683f8d2c09f8174aa6e4f9e53cd3d909","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Sonic Highways","release_date":"2014-11-09","release_date_precision":"day","total_tracks":8,"type":"album","uri":"spotify:album:2qwN15acAl3sm3Idce5vK9"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/4IBQvwIbtDluogvDe2qpaB"},"href":"https://api.spotify.com/v1/albums/4IBQvwIbtDluogvDe2qpaB","id":"4IBQvwIbtDluogvDe2qpaB","images":[{"height":640,"url":"https://i.scdn.co/image/638e69de6bd89953f5d21721c88de998d1a70098","width":638},{"height":300,"url":"https://i.scdn.co/image/38fbfccd3122e787f5f7de283804eb662bbae3ed","width":299},{"height":64,"url":"https://i.scdn.co/image/6a28781cd270878100b2f42df822525710a241df","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Skin And Bones (Live)","release_date":"2006-11-07","release_date_precision":"day","total_tracks":15,"type":"album","uri":"spotify:album:4IBQvwIbtDluogvDe2qpaB"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/6nf2P1xl5Z4qHdTAsdvo6B"},"href":"https://api.spotify.com/v1/albums/6nf2P1xl5Z4qHdTAsdvo6B","id":"6nf2P1xl5Z4qHdTAsdvo6B","images":[{"height":557,"url":"https://i.scdn.co/image/2dcb3ed1051e77a086cc6cdc0fe6861232477c14","width":640},{"height":261,"url":"https://i.scdn.co/image/6bb881f93b0e76a34413386d59062d20752bbf06","width":300},{"height":56,"url":"https://i.scdn.co/image/d0407eedb047139ee9448d4817eea208ebd731a8","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Best Of You","release_date":"2005-05-30","release_date_precision":"day","total_tracks":2,"type":"album","uri":"spotify:album:6nf2P1xl5Z4qHdTAsdvo6B"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/6wGcuJq8QjSeoYMJWgW7Wo"},"href":"https://api.spotify.com/v1/albums/6wGcuJq8QjSeoYMJWgW7Wo","id":"6wGcuJq8QjSeoYMJWgW7Wo","images":[{"height":640,"url":"https://i.scdn.co/image/e4d60163394c014f9b7f4dad64133ce200271528","width":640},{"height":300,"url":"https://i.scdn.co/image/fe80692a086721a5b980a5e1d0687965b5992b86","width":300},{"height":64,"url":"https://i.scdn.co/image/1b1666743de15f9979a42d625be6db678d310563","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Saint Cecilia EP","release_date":"2015-11-23","release_date_precision":"day","total_tracks":5,"type":"album","uri":"spotify:album:6wGcuJq8QjSeoYMJWgW7Wo"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/1CGsXbXvhfNhgFJgt4JmQm"},"href":"https://api.spotify.com/v1/albums/1CGsXbXvhfNhgFJgt4JmQm","id":"1CGsXbXvhfNhgFJgt4JmQm","images":[{"height":640,"url":"https://i.scdn.co/image/5840a2e94030104a5f34ecbd3d79541040566a97","width":640},{"height":300,"url":"https://i.scdn.co/image/466a21e8c6f72e540392ae76a94e01c876a8f193","width":300},{"height":64,"url":"https://i.scdn.co/image/f31729bf93335fe308dc2523d8166a3b01505485","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Run","release_date":"2017-06-01","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:1CGsXbXvhfNhgFJgt4JmQm"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5bHjVR4F2Tfq4Ha6x7K6wU"},"href":"https://api.spotify.com/v1/artists/5bHjVR4F2Tfq4Ha6x7K6wU","id":"5bHjVR4F2Tfq4Ha6x7K6wU","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Rockabye Baby!","type":"artist","uri":"spotify:artist:5bHjVR4F2Tfq4Ha6x7K6wU"}],"external_urls":{"spotify":"https://open.spotify.com/album/6p9nnPzyqcbXtExdmNbmgA"},"href":"https://api.spotify.com/v1/albums/6p9nnPzyqcbXtExdmNbmgA","id":"6p9nnPzyqcbXtExdmNbmgA","images":[{"height":640,"url":"https://i.scdn.co/image/b8f89bfcf7ed52ec48b05e504db06243ce256cf8","width":640},{"height":300,"url":"https://i.scdn.co/image/845daca091fff8bc8ff4bd34b62cc2d58eed5937","width":300},{"height":64,"url":"https://i.scdn.co/image/370482e7070b78f482141a502c18436143a027f1","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Lullaby Renditions of Foo Fighters","release_date":"2012-05-29","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:6p9nnPzyqcbXtExdmNbmgA"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/10foXPZhxdux3SQ0kMZCGy"},"href":"https://api.spotify.com/v1/albums/10foXPZhxdux3SQ0kMZCGy","id":"10foXPZhxdux3SQ0kMZCGy","images":[{"height":640,"url":"https://i.scdn.co/image/6214e1bcc63cc94c0a2d0ff1f8eb39d6fa9374cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a6cc20f1bdc6c9cc632326f4ca3db17ca9647e43","width":300},{"height":64,"url":"https://i.scdn.co/image/5c0c47c12e0e27924abee934629dd7c533041077","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Songs From The Laundry Room","release_date":"2015-09-11","release_date_precision":"day","total_tracks":4,"type":"album","uri":"spotify:album:10foXPZhxdux3SQ0kMZCGy"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/1kx8R4t59MGvyu51Gv9LD8"},"href":"https://api.spotify.com/v1/albums/1kx8R4t59MGvyu51Gv9LD8","id":"1kx8R4t59MGvyu51Gv9LD8","images":[{"height":640,"url":"https://i.scdn.co/image/555ce446cef73a8a39eccea7d622da8955f0c826","width":640},{"height":300,"url":"https://i.scdn.co/image/ab18975b72487f0ca11088edd13f461adc613d16","width":300},{"height":64,"url":"https://i.scdn.co/image/889497b7aa337c865520ea7c08f42401488fa335","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Wasting Light (Bonus Tracks)","release_date":"2011-04-12","release_date_precision":"day","total_tracks":2,"type":"album","uri":"spotify:album:1kx8R4t59MGvyu51Gv9LD8"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/1MqR9FewndVsGvOcE1kKoI"},"href":"https://api.spotify.com/v1/albums/1MqR9FewndVsGvOcE1kKoI","id":"1MqR9FewndVsGvOcE1kKoI","images":[{"height":640,"url":"https://i.scdn.co/image/cb653b6ce8d4245507922096d2ab7bdedc40f470","width":640},{"height":300,"url":"https://i.scdn.co/image/f7734f0ec9e0e3b19156309e8052234f54b31a6b","width":300},{"height":64,"url":"https://i.scdn.co/image/ba91f4f3da67889481b044c6587e859ebd6a1a81","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Soldier","release_date":"2017-10-20","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:1MqR9FewndVsGvOcE1kKoI"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"},"href":"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD","id":"7jy3rLJdDQY21OgRLCZ9sD","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Foo Fighters","type":"artist","uri":"spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"}],"external_urls":{"spotify":"https://open.spotify.com/album/6d2jqdroo5aq7azXydA64g"},"href":"https://api.spotify.com/v1/albums/6d2jqdroo5aq7azXydA64g","id":"6d2jqdroo5aq7azXydA64g","images":[{"height":640,"url":"https://i.scdn.co/image/5d867946ed04b46fe7a6a514c2da32596252aad2","width":640},{"height":300,"url":"https://i.scdn.co/image/40fc141b5b40d948d344547a069ed378702968ee","width":300},{"height":64,"url":"https://i.scdn.co/image/3aed21536b983125d28a22305f4c8c2ec4056ba3","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Let It Die","release_date":"2008-04-02","release_date_precision":"day","total_tracks":4,"type":"album","uri":"spotify:album:6d2jqdroo5aq7azXydA64g"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/648dUUIlz7RSeg3O8CbTat"},"href":"https://api.spotify.com/v1/artists/648dUUIlz7RSeg3O8CbTat","id":"648dUUIlz7RSeg3O8CbTat","track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"Midnite String Quartet","type":"artist","uri":"spotify:artist:648dUUIlz7RSeg3O8CbTat"}],"external_urls":{"spotify":"https://open.spotify.com/album/2JdBScyGIecmwW3o1p71qw"},"href":"https://api.spotify.com/v1/albums/2JdBScyGIecmwW3o1p71qw","id":"2JdBScyGIecmwW3o1p71qw","images":[{"height":640,"url":"https://i.scdn.co/image/8f10242226630bbb534504db5b1d3f9d51da0819","width":640},{"height":300,"url":"https://i.scdn.co/image/e4f0ac9a01879a0162f02e1f8e659af8d33af159","width":300},{"height":64,"url":"https://i.scdn.co/image/65f89e6a9131f472ae850d18a4a279a8731baac7","width":64}],"track":"https://p.scdn.co/mp3-preview/982751373c269d03c5f81459a3c5335cc0b59389?cid=774b29d4f13844c495f206cafdad9c86","name":"MSQ Performs Foo Fighters","release_date":"2015-04-27","release_date_precision":"day","total_tracks":10,"type":"album","uri":"spotify:album:2JdBScyGIecmwW3o1p71qw"}],"limit":20,"next":"https://api.spotify.com/v1/search?query=FOO+FIGHTERS&type=album&market=GB&offset=20&limit=20","offset":0,"previous":null,"total":223}}';

//parse spotifyjson json string to get array
var data = '';

// use when  in browser
$(document).ready(function () {
	console.log('ready', data);
	//search albums

});



var searchAlbums = function () {

	// GET ONLY THE PARTS OF THE ARRAY WE NEED (SPOTIFY JSON IS VERBOSE).
	var items = data.albums.items;
	var resultsintohtml = '';
	var menu = '';
	//CHOOSE NAV TO APPLY STICKY CLASS TO
	myNavigation = $("#main_nav");


	// ADD CLASS STICKY IF THE WINDOW HAS SCROLLED OVER 260PX
	// IF ITS UNDER REMOVE TEH CLASS
	//WINDOW SCROLL IS FIRED EVERYTIME WE MOVE THE SCROLL BAR
	$(window).scroll(function () {
		console.log($(this).scrollTop());
		
	});



	//iterate through each array item (JQ for loop)		
	//jQuery.each( object/ARRAY, callback )
	
	$.each(items, function (index) {

		// get the ID from the items array for menu
		var id = items[index].id;
		// get the name from the items array
		var name = items[index].name;
		// get the image from the items array - note this is a nested array
		var image = items[index].images[1].url;
		var track = items[index].track;
		//add the vars into a large string we can holding all the html we need
		//there are alternative ways to do this via append() etc
		// notice we add a unique bacground image with an inline style - the rest is positioned by css
		resultsintohtml += '';
		//ADD NAMES TO A MENU SO WE CAN ADD SOME SCROLL ANIMATIONS TO CONTENT
		menu += '';
	});
	// once we have iterated through the array and create the html mark up
	// insert it into the results div via the html() method;
	// add html() to #results holder
	// add html() to #main_menu_holder holder
	

	// call a new function that applies new click events.
	// we have to do this because the images were not in the DOM
	//addclickevents();

};



var addclickevents = function () {

	// add scroll to function using animate and offset.top
	//The offset() method set or returns the offset coordinates for the selected elements, relative to the document.

	
	

	$('.cover').click(function (e) {
		e.preventDefault();
		console.log('get song');
		// identify the cover which as been clicked
		var target = $(this);
		var currenttrack = target.data('track');
		// if the target has the class playing pause the audio
		// note the audio var is global, is this was local we 
		// would play sounds on top of each other
		
		// create audio element
		

	});
	
	// add scroll animation
	$('#main_menu_holder li a').click(function (e) {
		e.preventDefault();
		// get the href - could be any attribute but needs to be an id on a corresponding div
		var target = $(this).attr('');
		// The scrollTop() method sets or returns the vertical scrollbar position for the selected elements.
		//Tip: When the scrollbar is on the top, the position is 0.

		$('html, body').animate({
			scrollTop: $("#" + target).offset().top
		}, 2000);
	});


};
