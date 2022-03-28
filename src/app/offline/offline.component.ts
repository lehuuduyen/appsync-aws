import { Component, OnInit } from '@angular/core';
import { AppsyncService } from '../appsync.service';
import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import { buildMutation } from 'aws-appsync';
import { createTodoInput } from 'src/graphql/inputs';
import gql from 'graphql-tag';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';


@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss']
})
export class OfflineComponent implements OnInit {

  online$: Observable<boolean>;
  allTodos:any = [];
  constructor(private appsync:AppsyncService) { this.online$ = merge(
    of(navigator.onLine),
    fromEvent(window, 'online').pipe(mapTo(true)),
    fromEvent(window, 'offline').pipe(mapTo(false))
  );}

  async ngOnInit() {
   this.appsync.hc().then(client => {
     const observable = client.watchQuery({
       query: gql(listTodos),
       fetchPolicy: 'cache-and-network'
     });
     observable.subscribe(({data}) => {
       this.allTodos = data.listTodos.items;
     })
   })
   
  } 

  async createTodo(todoName: any){
    if(todoName.value.length>0){
      const client = await this.appsync.hc();
      const result = await client.mutate(buildMutation(
        client,
        gql(createTodo),
        {
          inputType: gql(createTodoInput),
          variables: {
            input: {
              name: todoName.value
            }
          }
        },
        _variables => [gql(listTodos)],
        "Todo"
      ));
      this.allTodos.push(result.data.createTodo);
      todoName.value = null

    }
      
  }

  
}
