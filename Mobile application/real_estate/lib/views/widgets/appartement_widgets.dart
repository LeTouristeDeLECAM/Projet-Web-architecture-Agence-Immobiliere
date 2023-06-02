import 'package:flutter/material.dart';

class AppartementCard extends StatelessWidget{
  final int appart_Id;
  final String title;
  final String description;
  final int price;
  final int surface;
  final int nbRooms;
  final String address;


  const AppartementCard({
    Key? key,
    required this.appart_Id,
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
                Text(price.toString()),
              ],
            ),
            Row(
              children: <Widget>[
                Text('Surface: '),
                Text(surface.toString()),
              ],
            ),
            Row(
              children: <Widget>[
                Text('Rooms: '),
                Text(nbRooms.toString()),
              ],
            ),
            
            Row(
              children: <Widget>[
                Text('Address: '),
                Text(address),
              ],
            ),

            Row(
              children: <Widget>[
                Text('Appartement ID: '),
                Text(appart_Id.toString()),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                TextButton(
                  child: const Text('Tickets'),
                  onPressed: () {
                    Navigator.pushNamed(context, '/tickets/$appart_Id');
                  },
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('Edit'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('Delete'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
                
              ],
            ),
          ],
        ),
      ),
    );

  }
}