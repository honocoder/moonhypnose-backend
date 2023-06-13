import { Module } from "@nestjs/common";
import { AnalyseModuleBase } from "./base/analyse.module.base";
import { AnalyseService } from "./analyse.service";
import { AnalyseController } from "./analyse.controller";
import { AnalyseResolver } from "./analyse.resolver";

@Module({
  imports: [AnalyseModuleBase],
  controllers: [AnalyseController],
  providers: [AnalyseService, AnalyseResolver],
  exports: [AnalyseService],
})
export class AnalyseModule {}
