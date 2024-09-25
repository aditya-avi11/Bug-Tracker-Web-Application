import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teamleader',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './teamleader.component.html',
  styleUrl: './teamleader.component.css'
})
export class TeamleaderComponent {
  bugReportView: boolean = true;
  bugDetails = [
    { bugName: 'Btn1', description: 'Button1 not working', priority: 1, duedate: new Date('2024-09-30') },
    { bugName: 'LoginIssue', description: 'User cannot log in', priority: 2, duedate: new Date('2024-10-05') },
    { bugName: 'FormError', description: 'Form validation not working', priority: 3, duedate: new Date('2024-09-28') },
    { bugName: 'PageCrash', description: 'Page crashes on load', priority: 1, duedate: new Date('2024-10-01') },
    { bugName: 'SlowLoad', description: 'Page loading time is slow', priority: 2, duedate: new Date('2024-10-07') }
  ];
  teamMembers = [
    { empID: '101', empName: 'Avi' },
    { empID: '102', empName: 'John Snow' },
    { empID: '103', empName: 'Bruce Wayne' },
    { empID: '104', empName: 'Tony Stark' },
    { empID: '105', empName: 'Miguel O hara' }
  ]
}
