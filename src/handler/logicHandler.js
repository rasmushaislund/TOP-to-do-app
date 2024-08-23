import { v4 as uuid } from 'uuid';
import { Project } from '../factories/newProject';

export let projectArray = [];

export function logicHandler(title) {
  const newProject = new Project(title, uuid());
  projectArray.push(newProject);

  return newProject;
}
