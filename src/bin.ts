#!/usr/bin/env node

import { Command } from "commander";

const command = new Command();

command
  .command("init")
  .description("Initialize a new Nextez project")
  .action(() => {
    console.log("Hello");
  });

command.parse();
