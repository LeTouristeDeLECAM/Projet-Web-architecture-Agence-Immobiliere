import 'package:flutter/material.dart';

class Appartement extends StatelessWidget{
  final String title;
  final String description;
  final String price;
  final String surface;
  final String nbRooms;
  final String address;


  const Appartement({
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
      padding: const EdgeInsets.all(8.0),
      child: Card(
        child: Column(
          children: <Widget>[
            ListTile(
              leading: const Icon(Icons.house),
              title: Text(title),
              subtitle: Text(description),
            ),
            Image.network('../Logo_ECAM.jpg'), // i don't know if it's work
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