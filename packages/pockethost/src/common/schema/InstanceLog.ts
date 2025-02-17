export enum StreamNames {
  StdOut = 'stdout',
  StdErr = 'stderr',
}

export type InstanceLogFields = {
  message: string
  time: string
  stream: StreamNames
}

export type UntrustedInstanceLogFields = Partial<InstanceLogFields>
