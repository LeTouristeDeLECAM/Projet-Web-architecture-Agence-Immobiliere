

class Ticket {
  int ticket_Id;
  String title;
  String description;
  String status;
  int appartementId;

  Ticket({
    required this.ticket_Id,
    required this.title,
    required this.description,
    required this.status,
    required this.appartementId});

  factory Ticket.fromJson(Map<String, dynamic> json) {
    return Ticket(
      ticket_Id: json['ticket_Id'],
      title: json['title'],
      description: json['description'],
      status: json['status'],
      appartementId: json['appartementId'],
    );
  }

  static List<Ticket> ticketsFromSnapshot(List snapshot) {
    return snapshot.map((data) {
      return Ticket.fromJson(data);
    }).toList();
  }

  @override
  String toString() {
    return 'Ticket{ticket_Id: $ticket_Id, title: $title, description: $description, status: $status, appartementId: $appartementId}';
  }

}