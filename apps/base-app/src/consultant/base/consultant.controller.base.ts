/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ConsultantService } from "../consultant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ConsultantCreateInput } from "./ConsultantCreateInput";
import { ConsultantWhereInput } from "./ConsultantWhereInput";
import { ConsultantWhereUniqueInput } from "./ConsultantWhereUniqueInput";
import { ConsultantFindManyArgs } from "./ConsultantFindManyArgs";
import { ConsultantUpdateInput } from "./ConsultantUpdateInput";
import { Consultant } from "./Consultant";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ConsultantControllerBase {
  constructor(
    protected readonly service: ConsultantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Consultant })
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ConsultantCreateInput
  ): Promise<Consultant> {
    return await this.service.create({
      data: {
        ...data,

        analyses: data.analyses
          ? {
              connect: data.analyses,
            }
          : undefined,
      },
      select: {
        age: true,

        analyses: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        job: true,
        kids: true,
        lastName: true,
        married: true,
        phone: true,
        updatedAt: true,
        whereTheyComeFrom: true,
        whyTheyCome: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Consultant] })
  @ApiNestedQuery(ConsultantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Consultant[]> {
    const args = plainToClass(ConsultantFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        age: true,

        analyses: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        job: true,
        kids: true,
        lastName: true,
        married: true,
        phone: true,
        updatedAt: true,
        whereTheyComeFrom: true,
        whyTheyCome: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Consultant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ConsultantWhereUniqueInput
  ): Promise<Consultant | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        age: true,

        analyses: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        job: true,
        kids: true,
        lastName: true,
        married: true,
        phone: true,
        updatedAt: true,
        whereTheyComeFrom: true,
        whyTheyCome: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Consultant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ConsultantWhereUniqueInput,
    @common.Body() data: ConsultantUpdateInput
  ): Promise<Consultant | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          analyses: data.analyses
            ? {
                connect: data.analyses,
              }
            : undefined,
        },
        select: {
          age: true,

          analyses: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          job: true,
          kids: true,
          lastName: true,
          married: true,
          phone: true,
          updatedAt: true,
          whereTheyComeFrom: true,
          whyTheyCome: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Consultant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ConsultantWhereUniqueInput
  ): Promise<Consultant | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          age: true,

          analyses: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          job: true,
          kids: true,
          lastName: true,
          married: true,
          phone: true,
          updatedAt: true,
          whereTheyComeFrom: true,
          whyTheyCome: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}