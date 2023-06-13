import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyseServiceBase } from "./base/analyse.service.base";

@Injectable()
export class AnalyseService extends AnalyseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
