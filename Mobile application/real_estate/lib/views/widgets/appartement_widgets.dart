import 'package:flutter/material.dart';

class AppartementCard extends StatelessWidget{
  final String title;
  final String description;
  final String price;
  final String surface;
  final String nbRooms;
  final String address;


  const AppartementCard({
    Key? key,
    required this.title,
    required this.description,
    required this.price,
    required this.surface,
    required this.nbRooms,
    required this.address

  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12.0),
      child: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            ListTile(
              leading: const Icon(Icons.house),
              title: Text(title),
              subtitle: Text(description),
            ),
            
            Row(
              children: <Widget>[
                Text('Price: '),
                Text(price),
              ],
            ),
            Row(
              children: <Widget>[
                Text('Surface: '),
                Text(surface),
              ],
            ),
            Row(
              children: <Widget>[
                Text('Rooms: '),
                Text(nbRooms),
              ],
            ),
            
            Row(
              children: <Widget>[
                Text('Address: '),
                Text(address),
              ],
            )
          ],
        ),
      ),
    );

  }
}