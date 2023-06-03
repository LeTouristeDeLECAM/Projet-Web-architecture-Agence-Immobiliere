

class Ticket {
  int ticket_Id;
  int appart_Id;
  String title;
  String description;
  String status;
  

  Ticket({
    required this.ticket_Id,
    required this.appart_Id,
    required this.title,
    required this.description,
    required this.status,
    });

  factory Ticket.fromJson(Map<String, dynamic> json) {
    return Ticket(
      ticket_Id: json['ticket_Id'],
      appart_Id: json['appart_Id'],
      title: json['title'],
      description: json['description'],
      status: json['status'],
      
    );
  }

  static List<Ticket> ticketsFromSnapshot(List snapshot) {
    return snapshot.map((data) {
      return Ticket.fromJson(data);
    }).toList();
  }

  @override
  String toString() {
    return 'Ticket{ticket_Id: $ticket_Id,appart_Id: $appart_Id, title: $title, description: $description, status: $status}';
  }

}