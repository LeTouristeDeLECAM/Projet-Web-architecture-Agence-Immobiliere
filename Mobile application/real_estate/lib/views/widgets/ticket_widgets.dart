import 'package:flutter/material.dart';

class TicketCard extends StatelessWidget{
  final int ticket_Id;
  final String title;
  final String description;
  final String status;
  final int appartementId;

  const TicketCard({
    Key? key,
    required this.ticket_Id,
    required this.title,
    required this.description,
    required this.status,
    required this.appartementId

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
                Text('Status: '),
                Text(status),
              ],
            ),
            Row(
              children: <Widget>[
                Text('Appartement: '),
                Text(appartementId.toString()),
              ],
            ),
            
          ],
        ),
      ),
    );
  }
}