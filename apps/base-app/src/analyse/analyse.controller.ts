import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyseService } from "./analyse.service";
import { AnalyseControllerBase } from "./base/analyse.controller.base";

@swagger.ApiTags("analyses")
@common.Controller("analyses")
export class AnalyseController extends AnalyseControllerBase {
  constructor(
    protected readonly service: AnalyseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
