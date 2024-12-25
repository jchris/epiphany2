import type * as Party from "partykit/server";
import { fireproof } from 'use-fireproof'
import { connect } from '@fireproof/cloud'

export default class Server implements Party.Server {
  constructor(readonly room: Party.Room) {}

  async onStart() {
    console.log(`server started: ${this.room.id}`)
    const id = this.room.id
    const ledger = fireproof(id)
    connect(ledger)
    ledger.subscribe((events) => {
      console.log('ledger event', events)
    }, true)
  }

  async onRequest() {
    return new Response(`ok: ${this.room.id}`, { status: 200 });
  }
}

Server satisfies Party.Worker;
