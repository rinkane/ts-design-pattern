import { Human } from "./human";
import { Prison } from "./prison";

{
  const prison = new Prison();
  prison.addPrisoner(new Human(101));
  prison.addPrisoner(new Human(1));
  prison.addPrisoner(new Human(13));
  prison.addPrisoner(new Human(666));

  const iterator = prison.iterator();
  while (iterator.hasNext()) {
    const prisoner = iterator.next() as Human;
    console.log(prisoner.id);
  }
}
