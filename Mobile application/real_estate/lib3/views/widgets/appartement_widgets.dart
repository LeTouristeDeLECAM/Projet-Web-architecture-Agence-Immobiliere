import 'package:flutter/material.dart';
import 'package:real_estate/route/route.dart'as route  ;
import 'package:real_estate/models/appartement.api.dart';


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
                    // Navigator.pushNamed(context, '/ticket/$appart_Id');
                    Navigator.pushNamed(context, route.ticketRoute, arguments: appart_Id);
                  },
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('Edit'),
                  onPressed: () {
                    Navigator.pushNamed(context, route.editAppartementRoute, arguments: appart_Id);
                  },
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('Delete'),
                  onPressed: () {
                    AppartementApi.deleteAppartement(appart_Id);
                    Navigator.pushNamed(context, route.homePage);
                  },
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